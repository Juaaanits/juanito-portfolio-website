import Link from "next/link"
import Image from "next/image"
import { Award, ExternalLink, Github, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import contestsData from "@/data/contests-data"

export const metadata = {
  title: "Awards & Competitions",
  description:
    "A collection of awards, competitions, hackathons, and technical event participations.",
}

export default function ContestsPage() {
  const { contests } = contestsData

  return (
    <div className="container py-12">
      <div>
        <h1 className="mb-4 text-4xl font-bold">Awards & Competitions</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Awards, competitions, hackathons, and technical events I participated
          in
        </p>
      </div>

      {contests.length === 0 ? (
        <Card className="border-zinc-800/50 bg-zinc-900/50">
          <CardContent className="p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border border-primary/20 bg-primary/10 p-3">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="mb-2 text-xl font-semibold">
              No awards or competitions added yet
            </h2>
            <p className="text-zinc-400">
              Add entries in <code>data/contests-data.ts</code> to showcase
              awards and participations here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contests.map((contest) => (
            <Card
              key={contest.id}
              className="flex flex-col overflow-hidden border-zinc-800/50 bg-zinc-900/50"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-900">
                {contest.image ? (
                  <Image
                    src={contest.image}
                    alt={contest.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    type="generic"
                    title={contest.title}
                    className="h-full w-full"
                  />
                )}
              </div>
              <CardContent className="flex flex-grow flex-col p-6">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold">{contest.title}</h2>
                  {contest.award && (
                    <Badge variant="secondary" className="shrink-0 gap-1">
                      <Award className="h-3 w-3" />
                      {contest.award}
                    </Badge>
                  )}
                </div>
                <p className="mb-2 text-zinc-400">
                  {contest.organizer} • {contest.year}
                </p>
                <p className="mb-4 flex-grow text-zinc-400">
                  {contest.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {contest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-2">
                  {contest.demo && (
                    <Link
                      href={contest.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-white text-black hover:bg-zinc-200 group"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  )}
                  {contest.github && (
                    <Link
                      href={`${contest.github}?source=mgiovani.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 hover:bg-white/10 group"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Repo
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
