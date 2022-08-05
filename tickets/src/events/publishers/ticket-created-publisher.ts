import { Publisher, Subjects, TicketCreatedEvent } from '@jpetersondev/common_libs'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}