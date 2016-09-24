import profiles from './profiles';
import users from './users';
import stripe from './stripe';
import programs from './programs';
import lessons from './lessons';
import websites from './website';
import companies from './companies';
import trainers from './trainers';
import athletes from './athletes';
import purchased_programs from './purchased_programs';
import events from './events';
import products from './products';
import items from './items';
import exercises from './exercises';

export default function () {
  profiles();
  users();
  stripe();
  lessons();
  programs();
  websites();
  companies();
  trainers();
  athletes();
  purchased_programs();
  events();
  products();
  items();
  exercises();
}