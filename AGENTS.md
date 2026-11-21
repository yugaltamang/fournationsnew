# Architecture rules

- Keep the campus virtual tour in a dedicated landing section and use Matterport's hosted embed for the Matterport tours (CDS Tower, CDS Tower - 2nd Floor, Tower A, Tower C), so its viewer scripts and navigation stay managed by Matterport rather than duplicated in the application; the Auditorium and Food Court tours are self-hosted pages on s3.mastersunion.link.
- Keep the programme film in its own landing section using GSAP ScrollTrigger for reversible, reduced-motion-aware zoom and lazy-loaded CDN video with native playback controls, so scrolling stays smooth and playback remains accessible.
