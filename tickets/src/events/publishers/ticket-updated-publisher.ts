import { Publisher, Subjects, TicketUpdatedEvent } from '@jpetersondev/common_libs'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}