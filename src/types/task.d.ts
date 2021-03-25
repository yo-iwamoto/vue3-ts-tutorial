export interface Task {
  name: string;
  status: number;
}

export interface IndexResponse {
  data: {
    tasks: Task[]
  }
}
