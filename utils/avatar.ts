import { shapes } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export async function GenerateUserAvatar(email: string) {
  const avatar = createAvatar(shapes, {
    seed: email,
  });

  const avatarUrl = avatar.toDataUri();

  return avatarUrl;
}
