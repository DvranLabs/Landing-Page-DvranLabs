import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  status: 'Active' | 'Completed' | 'Beta';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}