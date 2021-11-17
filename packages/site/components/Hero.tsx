// //! debug

// import { H3, Paragraph, Text, YStack, useMedia } from 'tamagui'

// export function Hero() {
//   return (
//     <YStack
//       // className="testme"
//       debug
//       position="absolute"
//       zIndex={-1}
//       pointerEvents="none"
//       opacity={0.2}
//       top="-40vh"
//       right="-40%"
//       width="80vw"
//       height="80vw"
//       scale={4}
//       maxHeight={720}
//       maxWidth={720}
//     ></YStack>
//   )
// }

import { ArrowRight, Check, Compass, Copy, Cpu, ExternalLink, Layers } from '@tamagui/feather-icons'
import copy from 'copy-to-clipboard'
import NextLink from 'next/link'
import React from 'react'
import { Button, H3, Paragraph, Text, Title, Tooltip, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'
import { IconStack } from './IconStack'

export function Hero() {
  const [hasCopied, setHasCopied] = React.useState(false)

  return (
    <ContainerLarge spacing="$7" position="relative" pt="$0" $gtSm={{ pt: '$3' }}>
      <YStack
        // className="testme"
        debug
        position="absolute"
        zIndex={-1}
        pointerEvents="none"
        opacity={0.2}
        top="-40vh"
        right="-40%"
        width="80vw"
        height="80vw"
        scale={4}
        maxHeight={720}
        maxWidth={720}
      >
        <div
          className="testme"
          style={{
            width: '100%',
            height: '100%',
            background: 'blue',
            // background: `radial-gradient(circle closest-side, var(--pink5), transparent)`,
          }}
        />
      </YStack>

      <YStack spacing="$6">
        <YStack ai="flex-start" $gtSm={{ ai: 'center' }} spacing="$4">
          <Title
            size="$7"
            letterSpacing={-1}
            fontWeight="700"
            $gtSm={{
              // TODO $12 not working?
              size: '$9',
              px: 70,
              ta: 'center',
              my: -5,
            }}
            $gtMd={{
              size: '$10',
              px: 90,
              my: -10,
            }}
          >
            Universal React design systems that optimize to every platform
            {/* <Tooltip contents="Web, iOS & Android">
              <span
                className="test-hero"
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: 3,
                  textDecorationColor: 'var(--pink7)',
                  textDecorationStyle: 'dotted',
                  cursor: 'help',
                  font: 'inherit',
                }}
              >

              </span>
            </Tooltip> */}
          </Title>

          <YStack
            px={0}
            maxWidth={550}
            $gtSm={{
              px: 120,
              maxWidth: 900,
            }}
          >
            <Paragraph
              color="$color2"
              size="$5"
              $gtSm={{
                // TODO
                size: '$6',
                ta: 'center',
              }}
            >
              React Native + Web UI Kit and optimizing compiler for themes, media queries and typed
              inline styles — share&nbsp;more code, get better performance.
            </Paragraph>
          </YStack>
        </YStack>

        <XStack jc="center" spacing>
          <NextLink href="/docs/intro/introduction" passHref>
            <Button
              textProps={{ fontWeight: '700' }}
              theme="pink"
              borderRadius={1000}
              iconAfter={<ArrowRight color="currentColor" size={12} />}
              tag="a"
            >
              Documentation
            </Button>
          </NextLink>
          <Button
            chromeless
            tag="a"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius={1000}
            iconAfter={<ExternalLink color="currentColor" style={{ opacity: 0.5 }} size={12} />}
          >
            GitHub
          </Button>
        </XStack>
      </YStack>

      <XStack
        borderWidth={1}
        borderColor="$borderColor"
        px="$5"
        py="$1"
        height={48}
        ai="center"
        als="center"
        br={100}
        backgroundColor="$bg"
      >
        {/* TODO user defined constants + $mono */}
        <Paragraph color="$color2" fontSize={14} fontFamily="$mono">
          npm install tamagui
        </Paragraph>
        <YStack width={60} />
        <Tooltip contents="Copy to clipboard">
          <Button
            borderRadius="$8"
            mr={-18}
            // TODO broken in latest
            icon={
              hasCopied ? (
                <Check size={16} color="currentColor" />
              ) : (
                <Copy size={16} color="currentColor" />
              )
            }
            aria-label="Copy the install snippet to Clipboard"
            onClick={() => {
              copy('npm install tamagui')
              setHasCopied(true)
            }}
          />
        </Tooltip>
      </XStack>

      <ContainerLarge>
        <XStack
          flex={1}
          overflow="hidden"
          maxWidth="100%"
          spacing="$6"
          flexWrap="nowrap"
          $sm={{ flexDirection: 'column' }}
        >
          <YStack width="33%" $sm={{ width: 'auto' }} flexShrink={1}>
            <IconStack>
              <Cpu size={20} color="var(--pink9)" />
            </IconStack>
            <H3 size="$4" mb="$2">
              Performant
            </H3>
            <Paragraph size="$3" color="$color4">
              Compiles inline styles to atomic CSS, media query styles and hooks into CSS, and theme
              hooks & tokens into CSS variables, even with conditional logic.
            </Paragraph>
          </YStack>

          <YStack width="33%" $sm={{ width: 'auto' }} flexShrink={1}>
            <IconStack>
              <Compass size={20} color="var(--pink9)" />
            </IconStack>
            <H3 size="$4" mb="$2">
              Compatible
            </H3>
            <Paragraph size="$3" color="$color4">
              Augments{' '}
              <Text tag="a" href="http://google.com">
                react-native-web
              </Text>
              , reducing overhead for faster running apps. Build your own design system or use our
              lightweight component kit.
            </Paragraph>
          </YStack>

          <YStack width="33%" $sm={{ width: 'auto' }} flexShrink={1}>
            <IconStack>
              <Layers size={20} color="var(--pink9)" />
            </IconStack>
            <H3 size="$4" mb="$2">
              Intuitive
            </H3>
            <Paragraph size="$3" color="$color4">
              Supports the incredible DX advances in design systems of late: themes, tokens,
              shorthands, media queries, and typed inline styles that just work.
            </Paragraph>
          </YStack>

          {/* <YStack flexShrink={1}>
            <IconStack>
              <FastForward size={20} color="var(--pink9)" />
            </IconStack>
            <H3 mb="$2">Native</H3>
            <Paragraph size="$3" color="$color3">
              On the web Tamagui extracts styles to atomic CSS using CSS variables for themes and
              CSS media queries - even if you use hooks. On native, it extracts StyleSheet.
            </Paragraph>
          </YStack> */}
        </XStack>
      </ContainerLarge>
    </ContainerLarge>
  )
}
