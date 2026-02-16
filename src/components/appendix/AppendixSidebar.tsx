"use client"

import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
    Box,
    useTheme
} from "@mui/material";
import Link from "@/components/common";
import {usePathname} from "next/navigation";
import {
    AccountBox as CharacterIcon,
    AutoStories as RulesIcon,
    Construction as GearIcon,
    AutoFixHigh as MagicIcon,
    Psychology as AbilityIcon,
    Groups as RaceIcon,
    MilitaryTech as ClassIcon,
    Gavel as RuleSectionIcon,
    Backpack as EquipmentIcon,
    Category as CategoryIcon,
    WorkspacePremium as FeatIcon,
    Handyman as ProficiencyIcon,
    Language as LanguageIcon,
    School as MagicSchoolIcon,
    Pets as MonsterIcon,
    FormatListBulleted as TraitsIcon,
    AutoFixNormal as SpellIcon,
    Security as AlignmentIcon,
    Timeline as LevelIcon,
    Shield as ConditionIcon,
    PersonalVideo as FeatureIcon,
    Bolt as DamageIcon,
    Hardware as WeaponIcon,
    Home as BackgroundIcon
} from '@mui/icons-material';

const navSections = [
    {
        title: 'Core Rules',
        icon: <RulesIcon fontSize="small" />,
        items: [
            {title: 'Ability Scores', href: '/ability-scores', icon: <AbilityIcon fontSize="small" />},
            {title: 'Alignments', href: '/alignments', icon: <AlignmentIcon fontSize="small" />},
            {title: 'Conditions', href: '/conditions', icon: <ConditionIcon fontSize="small" />},
            {title: 'Damage Types', href: '/damage-types', icon: <DamageIcon fontSize="small" />},
            {title: 'Rule Sections', href: '/rule-sections', icon: <RuleSectionIcon fontSize="small" />},
        ]
    },
    {
        title: 'Character',
        icon: <CharacterIcon fontSize="small" />,
        items: [
            {title: 'Backgrounds', href: '/backgrounds', icon: <BackgroundIcon fontSize="small" />},
            {title: 'Classes', href: '/classes', icon: <ClassIcon fontSize="small" />},
            {title: 'Features', href: '/features', icon: <FeatureIcon fontSize="small" />},
            {title: 'Proficiencies', href: '/proficiencies', icon: <ProficiencyIcon fontSize="small" />},
            {title: 'Races', href: '/races', icon: <RaceIcon fontSize="small" />},
            {title: 'Skills', href: '/skills', icon: <ProficiencyIcon fontSize="small" />},
            {title: 'Subclasses', href: '/subclasses', icon: <ClassIcon fontSize="small" />},
            {title: 'Subraces', href: '/subraces', icon: <RaceIcon fontSize="small" />},
            {title: 'Traits', href: '/traits', icon: <TraitsIcon fontSize="small" />},
            {title: 'Levels', href: '/levels', icon: <LevelIcon fontSize="small" />},
        ]
    },
    {
        title: 'Gear & Items',
        icon: <GearIcon fontSize="small" />,
        items: [
            {title: 'Equipment', href: '/equipment', icon: <EquipmentIcon fontSize="small" />},
            {title: 'Equipment Categories', href: '/equipment-categories', icon: <CategoryIcon fontSize="small" />},
            {title: 'Magic Items', href: '/magic-items', icon: <MagicIcon fontSize="small" />},
            {title: 'Weapon Properties', href: '/weapon-properties', icon: <WeaponIcon fontSize="small" />},
        ]
    },
    {
        title: 'Magic & Lore',
        icon: <MagicIcon fontSize="small" />,
        items: [
            {title: 'Spells', href: '/spells', icon: <SpellIcon fontSize="small" />},
            {title: 'Magic Schools', href: '/magic-schools', icon: <MagicSchoolIcon fontSize="small" />},
            {title: 'Feats', href: '/feats', icon: <FeatIcon fontSize="small" />},
            {title: 'Languages', href: '/languages', icon: <LanguageIcon fontSize="small" />},
            {title: 'Monsters', href: '/monsters', icon: <MonsterIcon fontSize="small" />},
        ]
    }
]

interface AppendixSidebarProps {
    onItemClick?: () => void;
    sx?: any;
    isMobile?: boolean;
}

const AppendixSidebar = ({ onItemClick, sx, isMobile }: AppendixSidebarProps) => {
    const pathname = usePathname();
    const theme = useTheme();

    return (
        <Paper
            id='appendix-nav-list'
            elevation={0}
            sx={{
                width: 260,
                overflowY: 'auto',
                maxHeight: isMobile ? undefined : '70vh',
                position: { xs: 'static', md: 'sticky' },
                bgcolor: 'background.default',
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.divider,
                    borderRadius: '10px',
                },
                ...sx
            }}
        >
            <List sx={{py: 2}}>
                {navSections.map((section) => (
                    <List
                        disablePadding
                        key={section.title}
                        subheader={<ListSubheader
                            sx={{
                                bgcolor: 'background.default',
                                lineHeight: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '0.75rem',
                                letterSpacing: '0.1rem',
                                mt: section.title === navSections[0].title ? 0 : 2
                            }}
                        >
                            {section.title}
                        </ListSubheader>}>
                        <Box sx={{ px: 1 }}>
                            {section.items.map((item) => {
                                const href = `/appendix${item.href}`;
                                const active = pathname === href;
                                return (
                                    <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                                        <ListItemButton
                                            component={Link}
                                            href={href}
                                            selected={active}
                                            onClick={onItemClick}
                                            sx={{
                                                borderRadius: 1.5,
                                                py: 0.75,
                                                px: 2,
                                                '&.Mui-selected': {
                                                    backgroundColor: theme.palette.mode === 'dark'
                                                        ? 'primary.dark'
                                                        : 'primary.light',
                                                    color: theme.palette.mode === 'dark'
                                                        ? 'primary.contrastText'
                                                        : 'inherit',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.mode === 'dark'
                                                            ? 'primary.dark'
                                                            : 'primary.light',
                                                    },
                                                    '& .MuiListItemIcon-root': {
                                                        color: 'inherit',
                                                    },
                                                    '& .MuiListItemText-primary': {
                                                        fontWeight: 600,
                                                    }
                                                },
                                                '&:hover': {
                                                    backgroundColor: 'action.hover',
                                                },
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.title}
                                                primaryTypographyProps={{
                                                    variant: 'body2',
                                                    sx: {
                                                        fontSize: '0.875rem',
                                                        fontWeight: active ? 600 : 500
                                                    }
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </Box>
                    </List>
                ))}
            </List>
        </Paper>
    );
}

export default AppendixSidebar;
