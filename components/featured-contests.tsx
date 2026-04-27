import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import contestsData from "@/data/contests-data"

interface FeaturedContestsProps {
  className?: string
  showViewAll?: boolean
}

export function FeaturedContests({
  className,
  showViewAll = true,
}: FeaturedContestsProps) {
  const { featuredContests } = contestsData

  if (featuredContests.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold">
            Featured Awards & Competitions
          </h2>
          <p className="text-muted-foreground">
            Competitions, hackathons, awards, and technical events I joined
          </p>
        </div>
        {showViewAll && (
          <Link href="/contests">
            <Button variant="default" className="group">
              View All Awards & Competitions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredContests.map((contest) => (
          <Card
            key={contest.id}
            className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg"
          >
            <CardHeader className="p-0">
              <div className="aspect-video w-full overflow-hidden bg-muted/50">
                {contest.image ? (
                  <Image
                    src={contest.image}
                    alt={contest.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage
                    type="generic"
                    title={contest.title}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {contest.title}
                </h3>
                {contest.award && (
                  <Badge variant="secondary" className="shrink-0 gap-1">
                    <Award className="h-3 w-3" />
                    {contest.award}
                  </Badge>
                )}
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                {contest.organizer} • {contest.year}
              </p>
              <p className="mb-4 line-clamp-3 text-muted-foreground">
                {contest.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {contest.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {contest.demo && (
                  <Link
                    href={contest.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full group">
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
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
                    <Button variant="outline" size="sm" className="w-full group">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      Repo
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
