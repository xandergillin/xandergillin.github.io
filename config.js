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

  name: "Xander Gillin",
  tagline: "GIS Analyst & Community-Engaged Cartographer",
  location: "Bryn Mawr, Pennsylvania",

  email: "xandergillin@richmond.edu",
  github: "https://github.com/xandergillin",
  linkedin: "https://www.linkedin.com/in/xander-gillin-1a8193346/",
  website: "",

  headshot: "images/headshot.jpg",


  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================

  shortBio: `Junior at the University of Richmond studying Geography
             and Data Science, focused on open spatial data, community
             cartography, and making maps that answer real questions.`,

   
  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================

  longBio: `I am a junior at the University of Richmond studying Geography and 
            Data Science. My work focuses on using open spatial data to answer 
            questions that communities are actively asking, with an emphasis on 
            making complex data accessible through clear analysis and visualization.

            In 2026, I interned with the University of Richmond's Department of 
            Geography, where I conducted statistical analyses of margins of error 
            in American Community Survey data and produced a series of detailed maps 
            to communicate our findings. I am currently co-authoring this research 
            with a faculty member at the University of Florida.

            Outside of GIS, I enjoy pursuing creative projects. I am an avid painter, 
            operate a customizable ski glove business, and am a self-taught musician. 
            I regularly perform at the University of Richmond under the band name 
            "pennydog." 

            I will graduate in May 2028 and am seeking full-time opportunities in 
            spatial analysis, cartography, or applied research. I am especially 
            interested in roles that combine data analysis, GIS, and visual 
            communication to help solve real-world problems.`,


  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================

  education: [
    {
      school: "University of Richmond",
      degree: "B.A. Geography & Data Science",
      year: "Expected May 2028"
    },
    {
      school: "University College Dublin",
      degree: "Study Abroad",
      year: "Fall 2026"
    },
    {
      school: "The Shipley School",
      degree: "High School Diploma",
      year: "2024"
    }
  ],


  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================

   experience: [
    {
      role: "Undergraduate Research Fellow",
      org: "Spatial Analysis Lab, University of Richmond",
      years: "Summer 2026",
      blurb: "2026 University of Richmond's School of Arts and Sciences Summer Research Fellowship Award Winner ($6,000 funding awarded). Assessed and mitigated home value uncertainty in American Community Survey (ACS) data with Dr. Kyle Redican, through a three-county case study validating owner-occupied home value estimates against county tax records. Led the project's cartographic design, producing publication-quality maps in ArcGIS Pro that communicated patterns of home value uncertainty across the study area. Processed, analyzed, and visualized spatial and aspatial data using R and ArcGIS Pro. Presented results at the 2026 GeoCon (Virginia Association of Mapping and Land Information Systems Conference) and 2027 American Association of Geographers (AAG) Conferences."
    }
  ],

   
  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "Desktop GIS",
      skills: [
        "ArcGIS Pro",
        "QGIS",
        "ArcGIS Online",
        "StoryMaps",
        "Dashboards",
        "Field Maps"
      ]
    },
    {
      label: "Programming",
      skills: [
        "Python",
        "R"
      ]
    },
    {
      label: "Web Mapping",
      skills: [
        "Mapbox Studio",
        "OpenStreetMap"
      ]
    },
    {
      label: "Data & Databases",
      skills: [
        "PostGIS",
        "Pandas",
        "GeoPandas"
      ]
    },
    {
      label: "Additional",
      skills: [
        "Adobe Illustrator",
        "Microsoft Excel"
      ]
    }
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
      slug:        "acs-uncertainty",
      title:       "Hidden Uncertainty in ACS Median Home Value",
      year:        "2026",
      type:        "Spatial Statistics",
      thumbnail:   "images/projects/my-project-thumb.jpg",
      blurb:       `A study illustrating the exact magnitude of 
                    error in American Community Survey Median Home Value 
                    estimates through manually calculated county, census tract,
                    and block group level data.`,
      tags:        ["R", "Big Data", "Research"],
      detailPage:  "project-acs-uncertainty.html",
      featured:    true,
    },

    {
      slug:        "Analytical Maps",
      title:       "Analytical Map Catalogue",
      year:        "2024-2026",
      type:        "Spatial Analysis",
      thumbnail:   "images/projects/IDW1.jpeg",
      blurb:       `A collection of analytical maps showcasing my work in 
                    GIS, spatial analysis, and geographic visualization. 
                    These maps explore patterns, relationships, and change 
                    across different places and datasets, with an emphasis 
                    on using maps to communicate meaningful spatial stories.`,
      tags:        ["ArcGIS Pro", "QGIS", "R", "IDW", "KDE", "Spline", "Krigging", "DEM"],
      detailPage:  "project-kde-traffic.html",
      featured:    true,
    },

    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "Cartographic Maps",
      title:       "Cartographic Map Catalogue",
      year:        "2024-2026",
      type:        "Cartography",
      thumbnail:   "images/projects/animation2_compressed.gif",
      blurb:       `A collection of cartographic work exploring the 
                    intersection of geography, design, and visual communication. 
                    These maps emphasize thoughtful composition, symbology, 
                    typography, and visual hierarchy to communicate geographic 
                    information clearly and effectively.`,
      tags:        ["ArcGIS Pro", "Adobe Illustrator"],
      detailPage:  "project-sanborn-mosaic.html",
      featured:    true,
    },

  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: `I am open to conversations about GIS, cartography,
                community-engaged research, and internship opportunities
                starting summer 2027.`,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
