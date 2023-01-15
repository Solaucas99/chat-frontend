import React, { useState, createContext, useMemo, useContext } from 'react';
import { IMessage } from '../Types/Entities/IMessage';
import { IUser } from '../Types/Entities/IUser';

export type ConversationProperty = {
  conversationid: string; // uuid
  users: IUser[]; // uuid
  messages: Record<string, IMessage[]>;
  paginationState: string;
};

const DEFAULT_CONVERSATION = {
  conversationid: '', // uuid
  users: [], // uuid
  messages: { test: [] },
  paginationState: '',
};

type FocusedConversationContextType = {
  conversation: ConversationProperty;
  setConversation: React.Dispatch<React.SetStateAction<ConversationProperty>>;
};

const FocusedConversationContext =
  createContext<FocusedConversationContextType | null>(null);

export function useFocusedConversation() {
  return useContext(
    FocusedConversationContext
  ) as FocusedConversationContextType;
}

function FocusedConversationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversation, setConversation] =
    useState<ConversationProperty>(DEFAULT_CONVERSATION);

  const obj = useMemo(
    () => ({
      conversation,
      setConversation,
    }),
    [conversation, setConversation]
  );

  return (
    <FocusedConversationContext.Provider value={obj}>
      {children}
    </FocusedConversationContext.Provider>
  );
}

export default FocusedConversationContextProvider;
