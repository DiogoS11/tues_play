export type PreferredFoot = "LEFT" | "RIGHT" | "BOTH";
export type Position = "GOALKEEPER" | "DEFENDER" | "MIDFIELDER" | "FORWARD";

export interface PlayerInput {
  name: string;
  nickname?: string;
  age?: number;
  heightCm?: number;
  preferredFoot?: PreferredFoot;
  position?: Position;
  avatarUrl?: string;
  joinedAt?: Date;
}
