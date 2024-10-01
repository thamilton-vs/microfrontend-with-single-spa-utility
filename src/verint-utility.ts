import { Subject } from 'rxjs';

const eventBus = new Subject<{ source: string, message: string }>();

export const sendMessage = (source: string, message: string) => {
  eventBus.next({ source, message });
};

export const getMessage = () => {
  return eventBus.asObservable();
};