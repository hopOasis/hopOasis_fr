export interface ICardButton {
  onClick: () => void;
}
export type QuestionButton = ICardButton & {
  isActive: boolean;
};
