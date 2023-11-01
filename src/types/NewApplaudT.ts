export type NewApplaudT = {
  sender: NewSenderT;
  receiver: NewReceiverT;
  comment: string;
};

export type NewSenderT = {
  id: string | undefined;
};

export type NewReceiverT = {
  id: string | undefined;
};
