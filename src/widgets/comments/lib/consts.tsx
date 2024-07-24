import { CommentProps } from 'widgets/comments/ui/comment/Comment.tsx';
import React from 'react';

export const comments: CommentProps[] = [
	{
		likes: 10,
		nickName: 'Ryan Hall',
		text: <>
			In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought
			in
			from the outside, tailored to suit colonial <br/> interests and commitments
		</>,
		avatar: 'public/avatar2.png'
	},
	{
		likes: 0,
		nickName: 'Lora Morrow',
		text: <>
			Likewise, most states in the Persian Gulf were handed over to those <br/> who could protect and
			safeguard
			imperial interests in the <br/> post-withdrawal phase
		</>,
		avatar: 'public/avatar1.png',
		isNested: true
	},
	{
		likes: -3,
		nickName: 'Tara Stark',
		text: <>
			French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and
			Laos.
			Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in
			1887,<br/> the Indochinese Union was established.
		</>,
		avatar: 'public/avatar3.png'
	},
	{
		likes: 0,
		nickName: 'Kris Robertson',
		text: <>
			Indian Marxist scholar Vivek Chibber has critiqued some foundational logics of Postcolonial
			Theory
			in his book Postcolonial Theory and <br/> the Specter of Capital
		</>,
		avatar: 'public/avatar4.png'
	},
];