import { list } from '@keystone-6/core'
import {text,relationship, checkbox} from '@keystone-6/core/fields'
import { permissions,isAdmin } from '../access'
import { permissionFields } from './fields'


export const Role = list({

  access: {
    operation: {
      create: isAdmin,
      query:  isAdmin,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  ui: {
    hideCreate: args => !isAdmin(args),
    hideDelete: args => !isAdmin(args),
    isHidden: args => !isAdmin(args),
  },

  fields: {
    name: text({ validation: { isRequired: true } }),
    ...permissionFields,
    assignedTo: relationship({
      ref: 'User.role', 
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
