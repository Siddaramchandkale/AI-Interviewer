import { db } from "@/firebase/admin";

export async function getInterview(id: string): Promise<Interview | null> {
    const interview = await db
    .collection('interviews')
    .doc(id)
    .get();

    return interview.data() as Interview | null;
}