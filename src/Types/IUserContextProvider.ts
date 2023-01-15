import { IConversation } from './Entities/IConversation';
import { IFriendship } from './Entities/IFriendship';

export interface IUserContextProvider {
  userData: {
    friendships: IFriendship[] | null;
    conversations: IConversation[];
    username: string;
  };
  userId: string;
  userSignUpDate: string;
  userSocketId: string;
}
