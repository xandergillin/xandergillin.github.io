/* ============================================================
   GIS PORTFOLIO TEMPLATE — CONFIG
   ============================================================

   This is the ONE file you need to edit to make the site yours.
   Every page on the site reads from here. Change something
   here, and it updates on the homepage, the projects page,
   the about page, and the contact page all at once.

   Rules of thumb:
   - Keep the quote marks around each value
   - Keep the commas at the end of each line
   - Don't delete the curly braces { } or square brackets [ ]

   ============================================================ */


const CONFIG = {

  // =========================================================
  // BASICS — name, contact, headshot
  // =========================================================

  name: "Jane Cartographer",
  tagline: "GIS Analyst & Community-Engaged Cartographer",
  location: "Richmond, Virginia",

  email:    "jane.cartographer@example.com",
  github:   "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  website:  "",   // leave as "" to hide

  headshot: "images/headshot.svg",


  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================

  shortBio: `Senior at the University of Richmond studying Geography
             and Data Science, focused on open spatial data, community
             cartography, and making maps that answer real questions.`,


  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================

  longBio: `I am a senior at the University of Richmond studying Geography
            and Data Science. My work focuses on using open spatial data
            to answer questions that communities are actually asking.

            In 2024 I interned with the City of Richmond's Office of
            Sustainability, where I built a series of tree-equity
            dashboards now used by neighborhood groups to advocate for
            plantings on underserved blocks. I have also worked on a
            statistical analysis of margins of error in American
            Community Survey data, a project I am co-authoring with
            two faculty members at UR.

            Outside of GIS, I write a small newsletter about urban
            history in the upper South, and I am slowly teaching
            myself to make decent sourdough.

            I am graduating in May 2026 and am looking for full-time
            roles in spatial analysis, planning support, or applied
            research.`,


  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================

  education: [
    {
      school: "University of Richmond",
      degree: "B.A., Geography & Data Science",
      year:   "Expected May 2026",
      note:   "Honors thesis on canopy equity in Richmond"
    },
    // Add high school, study abroad, certificate programs, etc. here
    // {
    //   school: "...",
    //   degree: "...",
    //   year:   "...",
    //   note:   ""
    // },
  ],


  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================

  experience: [
    {
      role:    "Undergraduate Research Fellow",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "2024 - present",
      blurb:   "Lead a small team on ACS uncertainty analysis under Dr. Plaxco."
    },
    {
      role:    "GIS Intern",
      org:     "City of Richmond, Office of Sustainability",
      years:   "Summer 2024",
      blurb:   "Built tree-equity dashboards now used by neighborhood groups."
    },
  ],


  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "Desktop GIS",
      skills: ["ArcGIS Pro", "QGIS", "ArcGIS Online"]
    },
    {
      label: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript (basic)"]
    },
    {
      label: "Web mapping",
      skills: ["Leaflet", "MapLibre GL JS", "Mapbox Studio"]
    },
    {
      label: "Data & databases",
      skills: ["PostGIS", "Pandas", "GeoPandas", "Tableau"]
    },
  ],


  // =========================================================
  // PROJECTS — the most important section
  // =========================================================
  //
  // Each project has a "slug" (a short id used for the URL)
  // and a "detailPage" (the file that holds the case study).
  //
  // To add a project: copy a whole { ... } block, paste it
  // below, and edit the values.
  //
  // The "featured: true" flag means it shows on the homepage.
  // Mark 3 as featured. The rest show on the projects page only.
  //
  // =========================================================

  projects: [

    {
      slug:        "tree-equity",
      title:       "Tree Equity in Jackson Ward",
      year:        "2025",
      type:        "Community Mapping",
      thumbnail:   "images/projects/tree-equity-thumb.svg",
      blurb:       `A block-by-block analysis of canopy gaps in a historically
                    redlined Richmond neighborhood, built with the Historic
                    Jackson Ward Association.`,
      tags:        ["ArcGIS Pro", "Python", "MapLibre", "Community-Engaged"],
      detailPage:  "project-tree-equity.html",
      featured:    true,
    },

    {
      slug:        "acs-uncertainty",
      title:       "Hidden Uncertainty in ACS Health Data",
      year:        "2025",
      type:        "Spatial Statistics",
      thumbnail:   "images/projects/acs-uncertainty-thumb.svg",
      blurb:       `A simulation study showing how margins of error in
                    American Community Survey estimates propagate through
                    public-health risk models.`,
      tags:        ["R", "GLM", "Monte Carlo", "Research"],
      detailPage:  "project-acs-uncertainty.html",
      featured:    true,
    },

    {
      slug:        "kde-traffic",
      title:       "Where the Crashes Cluster",
      year:        "2024",
      type:        "Spatial Analysis",
      thumbnail:   "images/projects/kde-traffic-thumb.svg",
      blurb:       `A kernel density analysis of three years of
                    traffic-accident data in Gainesville, Florida, with
                    an interactive bandwidth control.`,
      tags:        ["QGIS", "Python", "Leaflet", "KDE"],
      detailPage:  "project-kde-traffic.html",
      featured:    true,
    },

    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "sanborn-mosaic",
      title:       "Stitching the Sanborn Atlases of Richmond",
      year:        "2023",
      type:        "Historical GIS",
      thumbnail:   "images/projects/sanborn-mosaic-thumb.svg",
      blurb:       `Georeferenced and mosaicked a set of 1905 Sanborn fire
                    insurance maps into a single cloud-optimized GeoTIFF
                    for use in archival research.`,
      tags:        ["ArcGIS Pro", "GDAL", "COG", "Archives"],
      detailPage:  "project-sanborn-mosaic.html",
      featured:    false,
    },

  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: `I am open to conversations about GIS, cartography,
                community-engaged research, and full-time roles
                starting summer 2026.`,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
