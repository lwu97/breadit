import { getAuthSession } from "@/lib/auth"

export async function GET(req: Request) {
    const url = new URL(req.url)

    const session = await getAuthSession()
}