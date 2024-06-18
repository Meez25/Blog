interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'MemoFamille',
    description:
      "Mon application mobile qui réunit les générations autour de la mémoire familiale. Chacun peut ajouter des photos et vidéos qui s'intégreront dans une frise chronologique familiale. L'interface est simple et intuitive pour que tout le monde puisse l'utiliser.",
    imgSrc: '/static/images/Projet_memofamille/Sortie MemoFamille 1920x1080.jpg',
    href: 'https://memofamille.com',
  },
]

export default projectsData
