// types.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority:string;
  assignees:string
  team:string
  startDate:string,
  endDate:string | null
  }
  