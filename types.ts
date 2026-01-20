import React from 'react';

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AnalyticsEvent {
  CLICK_LINK = 'CLICK_LINK',
  USE_AI = 'USE_AI'
}