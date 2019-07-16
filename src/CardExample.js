import React from "react";
import { Card, Image, Media, Title, Content, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "rbx/index.css";

const CardExample = () => {
  return (
    <div>
    <Card style={{width: "50%", margin: "auto"}}>
      <Card.Image>
        <Image.Container size="4by3">
          <Image src="https://bulma.io/images/placeholders/1280x960.png" />
        </Image.Container>
      </Card.Image>
      <Card.Content>
        <Media>
          <Media.Item as="figure" align="left">
            <Image.Container as="p" size={64}>
              <Image
                alt="64x64"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </Image.Container>
          </Media.Item>
          <Media.Item>
            <Title as="p" size={4}>
              John Smith
            </Title>
            <Title as="p" subtitle size={6}>
              @johnsmith
            </Title>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="#@bulmaio">@bulmaio</a>.{' '}
          <a href="#css">#css</a> <a href="#responsive">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
    <br/>
    <Card style={{width: "75%", margin: "auto"}}>
      <Card.Header>
        <Card.Header.Title>Component</Card.Header.Title>
        <Card.Header.Icon as="a">
          <Icon>
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Card.Header.Icon>
      </Card.Header>
      <Card.Content>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="#@bulmaio">@bulmaio</a>.{' '}
          <a href="#css">#css</a> <a href="#responsive">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item as="a" href="#">
          Save
        </Card.Footer.Item>
        <Card.Footer.Item as="a" href="#">
          Edit
        </Card.Footer.Item>
        <Card.Footer.Item as="a" href="#">
          Delete
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
    <br/>
    <Card>
      <Card.Content>
        <Title>
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </Title>
        <Title subtitle>Jeff Atwood</Title>
      </Card.Content>
      <Card.Footer as="footer">
        <Card.Footer.Item as="p">
          <span>
            View on <a href="#twitter">Twitter</a>
          </span>
        </Card.Footer.Item>
        <Card.Footer.Item as="p">
          <span>
            Share on <a href="#facebook">Facebook</a>
          </span>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
    </div>
  );
} 

export default CardExample;