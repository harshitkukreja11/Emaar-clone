// src/components/emaar/EmaarHome.jsx
import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { FilterSection } from './FilterSection';
import { Footer } from './Footer';
import { InfoCardsSection } from './InfoCardsSection';
import { PropertiesSection } from './PropertiesSection';
import CommunitiesSection from './CommunitiesSection';
import { DigitalExperience } from './DigitalExperience';


export default function EmaarHome() {
return (
<div className="emaar-bootstrap-clone">
<Header />
<Hero />
<InfoCardsSection />
<PropertiesSection />

<CommunitiesSection />
<DigitalExperience />

<Footer />
</div>
);
}