import { comments } from "@/data/comments";
export default function handler(req, res) {
  const { commentId } = req.query;
  const deletedComment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments.splice(index, 1);
  res.status(200).json(deletedComment);
}
