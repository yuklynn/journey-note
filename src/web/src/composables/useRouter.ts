import { getCurrentInstance } from '@vue/composition-api';
import VueRouter, { Route } from 'vue-router';

/**
 * vue routerを使う
 * @returns route, router
 */
export default function useRouter(): {
  route: Route;
  router: VueRouter;
} {
  const ins = getCurrentInstance();
  if (!ins) {
    throw new Error('"useRouter()" must be used in setup().');
  }

  const thisIns = ins.proxy;

  return { route: thisIns.$route, router: thisIns.$router };
}
