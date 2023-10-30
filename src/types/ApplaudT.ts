export type ApplaudT = {
  id: string;
  sender: SenderT;
  receiver: ReceiverT;
  comment: string;
};

export type SenderT = {
  id: string;
  name: string;
  jobTitle: string;
  company?: string;
  avatarUrl: string;
};

export type ReceiverT = {
  id: string;
  name: string;
  jobTitle: string;
  company?: string;
  avatarUrl: string;
};
