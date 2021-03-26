export interface Task {
  id: number;
  name: string;
  status: number;
}

export interface IndexResponse {
  data: {
    tasks: Task[]
  }
}
