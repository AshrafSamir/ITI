import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './auth.decorator';
import { Role } from './auth.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    let jwt = context.switchToHttp().getRequest().header('x-auth-token');

    if (jwt) {
      console.log(jwt);
      let myDataJWT = this.jwtService.verify(jwt);
      console.log(myDataJWT);

      if (myDataJWT.isAdmin) {
        return true;
      }
    } else {
      return false;
    }
  }
}
