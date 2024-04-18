---
title: Tibetans targeted by spyware for Iphone and Android
pubDate: 2019-09-23T18:30:00.000Z
category: Reports
tags:
  - Whatsapp
  - Tibetan
description: >-
  November 12, 2018 was a beautiful, sunny day in Dharamshala. Cars honked in
  the bazaar while overnight Delhi buses tried to maneuver through the small,
  twisting roads. In Mcleodganj, the hilltown was bustling as ever with both
  local and international tourists. Later that night, a senior staff member at a
  Tibetan human rights group was contacted on WhatsApp from a previously unknown
  num
---

Malicious malware attacks targeting Tibetans is on the rise. Attackers pretending to be journalists or researchers from respected human rights organizations are sending links to Tibetans containing malware. One click will give the attackers full access to their mobile phone. Namgyal Dolkar was one of those attacked. [https://blog.tibcert.org/category/reports/](https://blog.tibcert.org/category/reports/)

November 12, 2018 was a beautiful, sunny day in Dharamshala. Cars honked in the bazaar while overnight Delhi buses tried to maneuver through the small, twisting roads. In Mcleodganj, the hilltown was bustling as ever with both local and international tourists. Later that night, a senior staff member at a Tibetan human rights group was contacted on WhatsApp from a previously unknown number.

This contact person claimed to be “Jason Wu,” head of the “Refugee Group” at Amnesty International’s Hong Kong branch, and he quickly introduced the topic of a recent self-immolation in Tibet. He said he was attempting to verify social media posts for use in an Amnesty International report on human rights in China, as well as for an upcoming statement critical of the Chinese government’s treatment of ethnic minorities.

During the conversation, Jason Wu sent links to information he claimed was related to the case. For an activist in the Tibet movement, this may seem like an everyday request. However, this request had sinister motives behind it. Jason Wu is not a real person and does not work for Amnesty International. The links that were sent included exploits (malicious code that takes advantage of software vulnerabilities) for iOS, the operating system of iPhone. If the links were clicked, an iPhone running a vulnerable version of iOS (11.0 through 11.4) would have been infected with spyware that could steal information from the device and the apps running on it. Figure 1 shows the conversation between the fake person and the Tibetan activist.

The Citizen Lab at the University of Toronto reports that this campaign is the first documented case of one-click mobile exploits used against Tibetans, reflecting an escalation in the sophistication of digital espionage threats targeting the Tibetan community. This campaign appears to be carried out by a single operator that the Citizen Lab called POISON CARP.

![](</assets/blog report/1.jpg>)Figure 1: An infection attempt in the early hours of November 13th, 2018 shows the level of effort put into social engineering.

## The Infection Attempts

The conversation with “Jason Wu” was not an isolated incident but part of an effort to infect phones of prominent people in the Tibetan community, including members of: 

* the Private Office of His Holiness the Dalai Lama; 
* the Central Tibetan Administration;
* the Tibetan Parliament; and 
* Tibetan human rights groups.

In addition to targeting iPhones, the spying campaign also targeted Android devices and tried to use malicious Open Authentication (OAuth) applications to gain access to Gmail accounts. Over the course of the campaign, the Citizen Lab collected one iOS exploit and eight distinct Android exploits. In total, from November 11-14, 2018, there were 15 attempts to infect mobile phones of Tibetan targets. Of these 15 infection attempts, 12 were sent with links to the iOS exploit. A final attempt was sent on April 22, 2019. Table 1 shows the targets and exploits sent to both Android and iOS phones.

The targeted individuals received malicious links in individually tailored WhatsApp text exchanges from seven fake personas designed to appear as journalists, staff at international advocacy organisations, volunteers to Tibetan human rights groups, and tourists to India. The fake personas actively engaged in conversations and persistently attempted to infect targets, demonstrating significant effort in social engineering. The fake personas exclusively used phone numbers on WhatsApp with a Hong Kong country code (+852). Links were sent using URL shorteners such as bit.ly to disguise the actual link. 

## “New York Times” Reporter 

In another intrusion attempt, a staff member from the same Tibetan human rights organization was contacted by “Lucy Leung,” a persona masquerading as a New York Times reporter seeking an interview (Figure 2) while targeting the individual with an iOS infection attempt. Despite clicking on the link, the target was not infected as they were using an Android device. Perhaps realizing that the target was using an Android device, the persona sent an Android exploit link, this time disguising it via bit.ly.

![](</assets/blog report/4.jpg>)Figure 2: After sending an iOS exploit link (left) the fake persona sent an Android exploit link (right).

## Accessing your Gmail

Besides iOS and Android exploit chains, OAuth has also been used in phishing attacks both in targeted operations and generic cyber crime. Recently, we have seen campaigns using malicious OAuth applications target the Tibetan community, potentially in an effort to bypass users who are using two factor authentication on their Google accounts. 

On May 31, 2019, a member of the Tibetan Parliament received a WhatsApp message requesting confirmation of a news story. The message included two bit.ly links (Figure 3). The first link was sent in the message lined to hxxps\://[www.energy-mail\[.\]org/B20V54](http://www.energy-mail\[.]org/B20V54), which redirected to a Google OAuth application called Energy Mail that requests access to Gmail data. The second link served an Android exploit. 

![](</assets/blog report/5.jpg>)

Figure 3: Two bit.ly links were shared where the first one redirected to the Google OAuth application (requesting access to target’s Gmail data) while the second link served an Android exploit.

## Conclusion

In the past decade, digital security threats towards the Tibetan community have shifted from sending malware as email attachments to phishing and exploit campaigns carried out by POISON CARP. These reported campaigns collectively document the first cases of one-click mobile exploits used to target the Tibetan community, showing that operators are changing their tactics in response to the Tibetan community’s awareness campaign, as well as demonstrating the ongoing digital security challenges Tibetan groups face. 

A common thread between these different espionage campaigns is a focus on clever social engineering rather than technical sophistication of exploits or malware. They also overlap with two recently reported campaigns against Uyghur organizations, thus reflecting a growing technical and social engineering sophistication in threats targeting the Tibetan community as well as other groups. 

For the full report by the Citizen Lab (including technical data), please read [https://citizenlab.ca/](https://citizenlab.ca/2019/09/poison-carp-tibetan-groups-targeted-with-1-click-mobile-exploits/)

As a target community, it becomes critical that we report these infection attempts immediately to protect and grow our collective digital security knowledge. Please contact us at [info@tibcert.org](mailto:info@tibcert.org) if you have any questions or notice anything suspicious with your digital devices. Lastly, as we meditate to clear our minds and help increase our focus, we can do the same for our devices by keeping them updated with the latest security releases, thereby keeping them free of infection.
