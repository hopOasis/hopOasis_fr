export interface ICardButton {
  onClick: () => void;
}
export type IQuestionButton = ICardButton & {
  isActive: boolean;
};
