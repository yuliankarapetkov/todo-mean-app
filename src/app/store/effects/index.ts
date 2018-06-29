import { AuthEffect } from './auth.effect';
import { RouterEffects } from './router.effect';

export const effects: any[] = [ AuthEffect, RouterEffects ];

export * from './auth.effect';
export * from './router.effect';