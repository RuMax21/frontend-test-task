import { useGetUsersQuery } from '@/entities/user/api';
import { Team } from '@/widgets/team/ui/Team';

export default function TeamPage() {
  useGetUsersQuery();

  return <Team />;
}
