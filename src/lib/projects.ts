export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  typology: string;
  client: string;
  description?: string;
  cover: string;
  images: string[];
};

const gallery = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/View-02-%281%29.jpg-ADckxVmTZs9akCVya3u9VK1PuY9t6i.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/View-03.jpg-VKb02CztYEzwrfFXRkwrEXs6ZgQPq5.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reception.jpg-khHyBpCpGzYABoIsaYLuompSz21YJZ.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banquet-Hall.jpg%20%281%29-HXd1CqXKQuKKGhzpWZimZTfS20CSM6.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cam-12-%282%29.jpg-gqWW8XBFvpiw10jD3d22mFKc3wtaFz.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clubhouse-Entry-Gate.jpg-A5IvBa9lnOoE4jaxPJAoFzAvGDsiD6.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Entry-Gate.jpg-rWjMF7bj2urJuDGbYTWVDIdc240uAf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gym.jpg-RqDRRpiJMd73w9psh5V2KBBtqdC6yF.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kids.jpg-iE6Ha2aGa5eJY2P85gve36gokq8CTp.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kids-cam.jpg-k7vpdLO6O5Zwd5t0qhXWuqcvdgSVvc.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lotus-Water-Feature.jpg-IBTQvJYrqyoLzGerClFOetaK1TiBUf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-copy.jpg-1FdWb3mv6hoHhPHTUOcbJbWwMB6LeY.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Night-copy.jpg-py1jhFBY1xxt1P2KNQs01UbC8E2NsI.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pickleball-Court_5k.jpg-OWMSEJbAt3AyGYNknDnUarzmLhWaBr.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pool-Render-Day.jpg-1JPGyRQhC8jHcrku9FbHZjQDvazbxg.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Squash-Court.jpg-rVAxuXkAj8cjz1QmKhsloDP2A44a7C.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/View-06.jpg-jw3h6I52Tcqrv5tghzDfDkT1uq7bE0.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/View-10.jpg-ZTCPyCjQWc0P0QPzVSF3sEV8KgaBPN.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/view-15.jpg-D0mjHToGNN1IwUn3IZ8A1j3y6VwRN1.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yoga.jpg-o8eHZY7fBoJWx01BI3J0PqLPwC9PtY.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zumba.jpg-IkKMCwH7dmEQ9SQec8V1rH4A3l1qGA.jpeg",
];

export const PROJECTS: Project[] = [
  {
    slug: "mahaakshmi-nagar-49-ayana",
    title: "Mahaakshmi Nagar 49 Ayana",
    year: "2024",
    location: "India",
    typology: "Residential Clubhouse & Landscape",
    client: "Mahaakshmi Nagar 49 Ayana",
    description: "A richly landscaped residential community imagined as a complete lifestyle destination, with a welcoming clubhouse, wellness spaces, courts, gardens and gathering places.",
    cover: gallery[0],
    images: gallery,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
