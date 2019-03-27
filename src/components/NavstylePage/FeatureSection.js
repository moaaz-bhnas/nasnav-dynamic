import React from 'react';
import hash from '../../image/hashtag.svg';
import './FeatureSection.scss';
import Feature from './Feature';

const FeatureSection = () => {
  const features = [
    {
      image: hash,
      title: 'Stunning Templates',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Total Design Freedom',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Industry-Leading SEO',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Mobile Optimized',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'App Market',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Unlimited Fonts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Scroll Effects',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Media Galleries',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Advanced Code Capability',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Repeating Layouts',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Multiple Payment Methods',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    },
    {
      image: hash,
      title: 'Custom Interactions',
      paragraph: 'Sed hic nulla qui laboriosam eum in dolorem ratione. Laborum perferendis sit est enim dolore.'
    } 
  ];

  return (
    <section className="FeatureSection" role="region" aria-labelledby="featureSection__title">
      <h2 className="featureSection__title" id="featureSection__title">Features</h2>
      <ul className="list featureList">
        {
          features.map((feature) => (
            <Feature featureData={feature} />
          ))
        }
      </ul>
    </section>
  );
}

export default FeatureSection;