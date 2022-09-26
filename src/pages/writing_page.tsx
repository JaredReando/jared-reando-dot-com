import React from 'react'
import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import { NotionRenderer } from 'react-notion'

export const WritingPage = () => {
	const [notionPage, setNotionPage] = React.useState<any>(null)
	const notionUrl = '7cfb69dab64f4fb6b3c26b0dd2888ff8'
	React.useLayoutEffect(() => {
		const getNotionPage = async (pageID: string) => {
			const notionPageResp = await fetch(
				`https://notion-api.splitbee.io/v1/page/${pageID}`
			).then((res) => res.json())
			setNotionPage(notionPageResp)
		}
		getNotionPage('32ad5f1c6d8e4471bfd5b17aa5bc9651')
	}, [])

	console.log('notion page: ', notionPage)
	return (
		<div className={`flex flex-center flex-column flex-wrap`}>
			<h1>Some Notes</h1>
			{notionPage && (
				<div className={'notion-doc-wrapper'}>
					<NotionRenderer blockMap={notionPage} />
				</div>
			)}
		</div>
	)
}
