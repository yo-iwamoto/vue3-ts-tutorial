import { Task } from '@/types/task'

export interface Store {
  state: {
    readonly isRegistered: boolean;
    readonly isAuthenticate: boolean;
    readonly tasks: Task[];
  };
  login: () => void;
  logout: () => void;
  register: () => void;
  setTasks: (tasks: Task[]) => void;
}
