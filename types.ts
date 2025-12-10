import React from 'react';

export interface CaseStudy {
  id: string;
  titleCN: string;
  titleEN: string;
  industry: string;
  tags: string[];
  abstractCN: string;
  abstractEN: string;
  clientBackgroundCN: string;
  clientBackgroundEN: string;
  challengeCN: string;
  challengeEN: string;
  solutionCN: string;
  solutionEN: string;
  processCN: string;
  processEN: string;
  resultsCN: string[];
  resultsEN: string[];
  quoteCN?: string;
  quoteEN?: string;
  authorTitle?: string;
}

export interface NavItem {
  labelCN: string;
  labelEN: string;
  path: string;
  subItems?: NavItem[];
}

export interface Feature {
  titleCN: string;
  titleEN: string;
  descCN: string;
  descEN: string;
  icon?: React.ReactNode;
}