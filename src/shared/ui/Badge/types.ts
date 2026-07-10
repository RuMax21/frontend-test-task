export type Tone = 'neutral' | 'active' | 'inactive';
export interface BadgeProps {
  tone?: Tone;
  children: React.ReactNode;
}
