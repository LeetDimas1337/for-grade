import React from 'react';
import classes from './articleContent.module.scss';
import Carousel from 'widgets/article/ui/carousel/Carousel.tsx';
import Quote from 'widgets/article/ui/quote/Quote.tsx';
import MaterialOnTheme from 'widgets/article/ui/material-on-theme/MaterialOnTheme.tsx';
import Tags from 'widgets/article/ui/tags/Tags.tsx';

const ArticleContent = (): JSX.Element => {
	return (
		<div className={classes.articleContent}>
			<div>
				<p className={classes.articleContent__capitalText}>
					<span className={classes.firstLetter}>M</span>
					any geographers are trained in toponymy and cartology, this is not their main preoccupation.
					Geographers
					study the space and the temporal database distribution of phenomena,
				</p>
				<p className={classes.articleContent__text}>
					processes, and features as well as the interaction of humans and their environment. Because space
					and
					place affect a variety of topics, <br/>such as economics, health, climate, plants and animals,
					geography
					is
					highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on an
					attentiveness to the relationship between physical and human phenomena and its spatial patterns.
				</p>
			</div>
			<h2 className={classes.subheader}>Integrated Geography</h2>
			<p className={classes.articleContent__text}>
				Geography as a discipline can be split broadly into two main subsidiary fields: human geography and
				physical geography. The former largely focuses on the built environment and how humans create, view,
				manage, and influence space. The latter examines the natural environment, and how organisms, climate,
				soil, water, and landforms produce and interact.
			</p>
			<p className={classes.articleContent__text}>
				The difference between these approaches led to a third field, environmental geography, which combines
				physical and human geography and concerns the interactions between the environment and humans.
			</p>
			<p className={classes.articleContent__text}>
				The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five
				of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to
				the 9th century BC depicted Babylon as being further north from the center of the world, though it is
				not certain what that center was supposed to represent.
			</p>
			<div style={{ paddingTop: '15px', marginBottom: '45px' }}>
				<Carousel/>
			</div>
			<div className={classes.withAside}>
				<div>
					<p className={classes.articleContent__text}>
						The oldest known world maps date back to ancient Babylon from the 9th century BC. The best known
						Babylonian world map, however, is the Imago Mundi of 600 BC. The map as reconstructed by Eckhard
						Unger
						shows Babylon on the Euphrates, surrounded by a circular landmass showing Assyria, Urartu and
						several
						cities, in turn surrounded by a "bitter river" (Oceanus), with seven islands arranged around it
						so
						as to
						form a seven-pointed star.
					</p>
					<p className={classes.articleContent__text}>
						The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions
						of
						five
						of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating
						back
						to
						the 9th century BC depicted Babylon as being further north from the center of the world,
						though <br/> it
						is
						not certain what that center was supposed to represent.
					</p>
					<p className={classes.articleContent__text}>
						The ideas of Anaximander: considered by later Greek writers to be the true founder of geography,
						come to
						us through fragments quoted by his successors. Anaximander is credited with the invention of the
						gnomon,
						the simple, <br/> yet efficient Greek instrument that allowed the early measurement of latitude.
						Thales
						is
						also credited with the prediction of eclipses. The foundations <br/> of geography can be traced
						to
						the
						ancient
						cultures, such as the ancient, medieval, and early modern Chinese.
					</p>
				</div>
				<MaterialOnTheme/>
			</div>
			<Quote/>
			<p className={classes.articleContent__text}>
				The Greeks, who were the first to explore geography as both art and science, achieved this through
				Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the
				first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides
				or Pythagoras. Anaxagoras was able to demonstrate that the profile of <br/> the Earth was circular by
				explaining eclipses. However, he still believed that <br/> the Earth was a flat disk, as did many of his
				contemporaries.
			</p>

			<p className={classes.articleContent__text}>
				The first rigorous system of latitude and longitude lines is credited <br/> to Hipparchus. He employed a
				sexagesimal system that was derived from Babylonian mathematics.
			</p>
			<div style={{marginLeft: '210px', marginBottom: '60px'}}>
				<Tags/>
			</div>
			<hr className={classes.hr}/>
		</div>
	);
};

export default ArticleContent;