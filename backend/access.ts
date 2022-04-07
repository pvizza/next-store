import { BaseListTypeInfo, ListAccessControl } from "@keystone-6/core/types";
import { permissionsList,Permission} from "./Schemas/fields";


export const isSignedIn = ({ session }:any) => {
  return !!session;
}

export const isAdmin = ({session}:any) => {
  if(session.itemId == process.env.ADMIN){
    
    return true ;
  }
  return false;

}

const generatedPermissions = Object.fromEntries(
  permissionsList.map(permission => [
    permission,
    function ({ session }: any) {
      return !!session?.data.role?.[permission];
    },
  ])
) as Record<Permission, ({ session }: any) => boolean>;

export const permissions = {
  ...generatedPermissions,
  
};

export const rules = {
  canManageProducts({ session }: any) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (session.itemId == process.env.ADMIN) {
      return true;
    }
    
    return { user: { id: { equals: session?.itemId } } };
  },
  canOrder({ session }: any) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (session.itemId == process.env.ADMIN) {
      return true;
    }
  
    return { user: { id: { equals: session?.itemId } } };
  },
  canManageOrderItems({ session }: any) {
    if (!isSignedIn({ session })) {
      return false;
    }
   
    if (session.itemId == process.env.ADMIN) {
      return true;
    }
   
    return { order: { user: { id: { equals: session?.itemId } } } };
  },
  canReadProducts({ session }: any) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (session.itemId == process.env.ADMIN) {
      return true; 
    }
 
  },
  canManageUsers({ session }: any) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (session.itemId == process.env.ADMIN) {
      return true;
    }
    
    return { id: { equals: session?.itemId } };
  },
};