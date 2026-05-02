import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Lightbulb, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import certificationsData from "@/data/certifications-data"

interface FeaturedCertificationsProps {
  className?: string
  showViewAll?: boolean
}

const placeholderInsights = [
  "Add the strongest technical concept, framework, or platform insight you gained.",
  "Add the most useful hands-on tool, lab, workflow, or implementation takeaway.",
  "Add how this certification or training improved your engineering decisions or delivery.",
]

export function FeaturedCertifications({
  className,
  showViewAll = true,
}: FeaturedCertificationsProps) {
  const { featuredCertifications } = certificationsData

  return (
    <div className={className}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold">Certifications & Training</h2>
          <p className="text-muted-foreground">
            Selected certifications, technical training, and structured learning across cloud, software, and AI systems.
          </p>
        </div>
        {showViewAll && (
          <Link href="/certifications">
            <Button variant="default" className="group">
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        )}
      </div>

      {featuredCertifications.length === 0 ? (
        <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <p className="text-lg font-semibold">Upcoming Soon</p>
            </div>
            <p className="mb-6 max-w-3xl text-muted-foreground">
              This section is ready for certifications, technical training, and applied learning projects. Each entry can
              include optional credential and project buttons, plus three concise insight bullets.
            </p>
            <div className="rounded-xl border border-dashed border-border/60 bg-background/30 p-5">
              <p className="mb-3 text-sm font-medium text-foreground">Learning bullet boilerplate</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {placeholderInsights.map((insight) => (
                  <li key={insight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCertifications.map((certification) => {
            const insights =
              certification.insights && certification.insights.length > 0
                ? certification.insights.slice(0, 3)
                : placeholderInsights

            return (
              <Card
                key={certification.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden bg-muted/50">
                    {certification.image ? (
                      <Image
                        src={certification.image}
                        alt={certification.title}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <PlaceholderImage
                        type="generic"
                        title={certification.title}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                    {certification.title}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {certification.issuer} | {certification.year}
                  </p>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">{certification.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {certification.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-5 rounded-xl border border-border/50 bg-background/40 p-4">
                    <p className="mb-3 text-sm font-medium text-foreground">Key Learnings</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {insights.map((insight) => (
                        <li key={insight} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    {certification.credentialUrl && (
                      <Link
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full group">
                          <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                          Credential
                        </Button>
                      </Link>
                    )}
                    {certification.projectUrl && (
                      <Link
                        href={certification.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full group">
                          <FolderOpen className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                          {certification.projectLabel || "Project"}
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
