import { CommentProps } from 'widgets/comments/ui/comment/Comment.tsx';
import React from 'react';

export const comments: CommentProps[] = [
	{
		likes: 10,
		nickName: 'Ryan Hall',
		text: <>
			In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought
		in
		from the outside, tailored to suit colonial interests and commitments
			</>,
		avatar: 'public/avatar2.png'
	},
	{
		likes: 0,
		nickName: 'Lora Morrow',
		text: <>
			Likewise, most states in the Persian Gulf were handed over to those who could protect and
		safeguard
		imperial interests in the post-withdrawal phase
			</>,
		avatar: 'public/avatar1.png',
		isNested: true
	},
	{
		likes: -3,
		nickName: 'Kris Robertson',
		text: <>
			French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and
Laos.
	Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in
1887, the Indochinese Union was established.
</>,
avatar: 'public/avatar3.png'
},
{
	likes: 0,
		nickName: 'Kris Robertson',
	text: <>
	Indian Marxist scholar Vivek Chibber has critiqued some foundational logics of Postcolonial
	Theory
	in his book Postcolonial Theory and the Specter of Capital
</>,
	avatar: 'public/avatar4.png'
},
];