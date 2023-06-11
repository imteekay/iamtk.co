import { useState, createContext, useContext, ChangeEvent } from 'react';

import type { NextPage } from 'next';

import { Head } from 'Base/components/Head';

interface Comment {
  text: string;
  author: string;
  edited: boolean;
  replies: Comment[];
}

type Comments = Comment[];

const initialComments: Comments = [
  {
    text: 'comment',
    author: 'TK',
    edited: false,
    replies: [
      {
        text: 'reply',
        author: 'TK',
        edited: false,
        replies: [
          {
            text: 'nested reply',
            author: 'TK',
            edited: false,
            replies: [],
          },
        ],
      },
    ],
  },
];

interface CommentsContextValueTypes {
  comments: Comments;
  handeCommentChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCommentAddition: (ids?: number[]) => () => void;
  handleCommentDeletion: (ids: number[], index: number) => () => void;
}

const CommentsContext = createContext({} as CommentsContextValueTypes);

interface CommentsProviderPropTypes {
  children: JSX.Element;
  initialComments: Comments;
}

const CommentsProvider = ({
  children,
  initialComments,
}: CommentsProviderPropTypes) => {
  const [comments, setComments] = useState<Comments>(initialComments);
  const [comment, setComment] = useState<Comment>({} as Comment);

  const addNewReply = (comments: Comments, ids: number[]): Comments => {
    if (ids.length === 0) {
      return [...comments, comment];
    }

    const id = ids.shift() as number;
    comments[id].replies = addNewReply(comments[id].replies, ids);
    return [...comments];
  };

  const removeReply = (comments: Comments, ids: number[], index: number) => {
    if (ids.length === 0) {
      return comments.filter((_, id) => id !== index);
    }

    const id = ids.shift() as number;
    comments[id].replies = removeReply(comments[id].replies, ids, index);
    return [...comments];
  };

  const handeCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment({
      text: event.target.value,
      author: 'TK',
      edited: false,
      replies: [],
    });
  };

  const handleCommentAddition =
    (ids: number[] = []) =>
    () => {
      setComments(addNewReply(comments, ids));
    };

  const handleCommentDeletion = (ids: number[], index: number) => () => {
    setComments(removeReply(comments, ids, index));
  };

  const providerValue = {
    comments,
    handeCommentChange,
    handleCommentAddition,
    handleCommentDeletion,
  };

  return (
    <CommentsContext.Provider value={providerValue}>
      {children}
    </CommentsContext.Provider>
  );
};

interface CommentWrapperPropTypes {
  children: React.ReactNode;
}

const CommentWrapper = ({ children }: CommentWrapperPropTypes) => (
  <div style={{ border: '1px solid', padding: '8px', margin: '8px' }}>
    {children}
  </div>
);

interface CommentTextWrapperPropTypes {
  children: React.ReactNode;
}

const CommentTextWrapper = ({ children }: CommentTextWrapperPropTypes) => (
  <div style={{ display: 'flex', gap: '8px' }}>{children}</div>
);

interface CommentTextPropTypes {
  children: React.ReactNode;
}

const CommentText = ({ children }: CommentTextPropTypes) => (
  <p style={{ marginTop: '8px', marginBottom: '8px' }}>{children}</p>
);

interface DeleteCommentButtonPropTypes {
  ids: number[];
  index: number;
}

const DeleteCommentButton = ({ ids, index }: DeleteCommentButtonPropTypes) => {
  const { handleCommentDeletion } = useContext(CommentsContext);
  return <button onClick={handleCommentDeletion(ids, index)}>X</button>;
};

interface AddCommentPropTypes {
  ids: number[];
}

const AddComment = ({ ids }: AddCommentPropTypes) => {
  const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);
  const { handeCommentChange, handleCommentAddition } =
    useContext(CommentsContext);

  const handleReplyInputOpen = () => setIsReplyInputOpen(!isReplyInputOpen);

  return (
    <>
      <span onClick={handleReplyInputOpen} style={{ marginRight: '8px' }}>
        Reply
      </span>
      {isReplyInputOpen ? (
        <>
          <input style={{ marginRight: '4px' }} onChange={handeCommentChange} />
          <button onClick={handleCommentAddition(ids)}>add comment</button>
        </>
      ) : null}
    </>
  );
};

interface EditedPropTypes {
  edited: boolean;
}

const Edited = ({ edited }: EditedPropTypes) =>
  edited ? <p style={{ marginTop: '8px', marginBottom: '8px' }}>✅</p> : null;

interface CommentPropTypes {
  text: string;
  author: string;
  edited: boolean;
  replies: Comments;
  index: number;
  ids: number[];
}

const Comment = ({
  text,
  author,
  edited,
  replies,
  index,
  ids,
}: CommentPropTypes) => (
  <CommentWrapper>
    <CommentTextWrapper>
      <CommentText>
        {author}: {text}
      </CommentText>
      <DeleteCommentButton ids={ids} index={index} />
    </CommentTextWrapper>
    <Edited edited={edited} />
    <Comments comments={replies} ids={[...ids, index]} />
    <AddComment ids={[...ids, index]} />
  </CommentWrapper>
);

interface CommentsPropTypes {
  comments: Comments;
  ids?: number[];
}

const Comments = ({ comments, ids = [] }: CommentsPropTypes) => (
  <>
    {comments.map((comment, index) => (
      <Comment
        key={`${index}-${comment.text}-${comment.author}`}
        text={comment.text}
        author={comment.author}
        edited={comment.edited}
        replies={comment.replies}
        index={index}
        ids={ids}
      />
    ))}
  </>
);

const Wrapper = () => {
  const { comments } = useContext(CommentsContext);
  return <Comments comments={comments} />;
};

const Page: NextPage = () => (
  <>
    <Head
      title="TK —— Crafting Frontend — Nested Comments"
      description="Learning & Improving with TK —— Crafting Frontend — Nested Comments"
      imageUrl="/logo.jpeg"
    />
    <CommentsProvider initialComments={initialComments}>
      <Wrapper />
    </CommentsProvider>
  </>
);

export default Page;
