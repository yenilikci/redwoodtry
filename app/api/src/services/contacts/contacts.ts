import {db} from 'src/lib/db'
import type {QueryResolvers, MutationResolvers} from 'types/graphql'
import {validate} from '@redwoodjs/api'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({id}) => {
  return db.contact.findUnique({
    where: {id},
  })
}

export const createContact = ({input}: CreateContactArgs) => {
  validate(input.email, 'email', {email: true})
  return db.contact.create({data: input})
}

export const updateContact: MutationResolvers['updateContact'] = ({id, input}) => {
  return db.contact.update({
    data: input,
    where: {id},
  })
}

export const deleteContact: MutationResolvers['deleteContact'] = ({id}) => {
  return db.contact.delete({
    where: {id},
  })
}
