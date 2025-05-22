import type {Metadata} from "next";
import {Box, Link, Stack, Typography} from "@mui/material";

export const metadata: Metadata = {
  title: "Dungeons & Dragons 5e SRD Handbook - Home",
  description: "Quickly find information from the Dungeons & Dragons 5e System Reference Document",
};

const collections = [
  {
    title: 'Ability Scores',
    href: '/ability-scores'
  },
  {
    title: 'Alignments',
    href: '/alignments'
  },
  {
    title: 'Backgrounds',
    href: '/backgrounds'
  },
  {
    title: 'Classes',
    href: '/classes'
  },
  {
    title: 'Conditions',
    href: '/conditions'
  },
  {
    title: 'Damage Types',
    href: '/damage-types'
  },
  {
    title: 'Equipment',
    href: '/equipment'
  },
  {
    title: 'Equipment Categories',
    href: '/equipment-categories'
  },
  {
    title: 'Feats',
    href: '/feats'
  },
  {
    title: 'Features',
    href: '/features'
  },
  {
    title: 'Languages',
    href: '/languages'
  },
  {
    title: 'Levels',
    href: '/levels'
  },
  {
    title: 'Magic Items',
    href: '/magic-items'
  },
  {
    title: 'Magic Schools',
    href: '/magic-schools'
  },
  {
    title: 'Monsters',
    href: '/monsters'
  },
  {
    title: 'Proficiencies',
    href: '/proficiencies'
  },
  {
    title: 'Races',
    href: '/races'
  },
  {
    title: 'Rule Sections',
    href: '/rule-sections'
  },
  {
    title: 'Skills',
    href: '/skills'
  },
  {
    title: 'Spells',
    href: '/spells'
  },
  {
    title: 'Subclasses',
    href: '/subclasses'
  },
  {
    title: 'Subraces',
    href: '/subraces'
  },
  {
    title: 'Traits',
    href: '/traits'
  },
  {
    title: 'Weapon Properties',
    href: '/weapon-properties'
  }
]

export default function Home() {
  return (
    <Box sx={{textAlign: 'center', my: 5}}>
      <Typography sx={{typography: {xs: 'h3', sm: 'h1'}, mb: 5}}>
        The Dungeons & Dragons Handbook
      </Typography>
      <Stack spacing={3}>
        {collections.map(c =>
            <Box key={c.href}>
              <Link href={c.href} variant='h4'>
                {c.title}
              </Link>
            </Box>
        )}
      </Stack>
    </Box>
  );
}
