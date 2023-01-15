import { IMessage } from './IMessage';
import { IUser } from './IUser';

export interface IConversation {
  conversationid: string; // uuid
  users: IUser[]; // uuid
  messages: IMessage[];
  paginationState: string; // uuid
}
