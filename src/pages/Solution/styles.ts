import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  padding-top: 80px;

  .hero {
    background: linear-gradient(135deg, #03045e 0%, #023e8a 100%);
    color: white;
    text-align: center;
    padding: 100px 20px;
    
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 20px;
      opacity: 0.9;
    }
  }

  .features {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;

    .feature-item {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 80px;
      
      &.reverse {
        flex-direction: row-reverse;
      }

      img {
        width: 300px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }

      .feature-content {
        flex: 1;

        h2 {
          color: #03045e;
          font-size: 28px;
          margin-bottom: 15px;
        }

        p {
          font-size: 16px;
          margin-bottom: 15px;
          color: #333;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: #666;
            font-size: 15px;

            &:before {
              content: "✓";
              position: absolute;
              left: 0;
              color: #03045e;
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  .cta {
    background: #f8f9fa;
    text-align: center;
    padding: 80px 20px;
    
    h2 {
      color: #03045e;
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      color: #666;
      margin-bottom: 40px;
    }

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;

      a {
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;

        &.primary-button {
          background: #03045e;
          color: white;

          &:hover {
            background: #023e8a;
          }
        }

        &.secondary-button {
          border: 2px solid #03045e;
          color: #03045e;

          &:hover {
            background: rgba(3, 4, 94, 0.1);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 60px 20px;
      
      h1 {
        font-size: 36px;
      }
      
      p {
        font-size: 18px;
      }
    }

    .features {
      .feature-item {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
        
        &.reverse {
          flex-direction: column;
        }

        img {
          width: 80%;
          max-width: 250px;
        }

        .feature-content {
          text-align: center;

          h2 {
            font-size: 24px;
          }

          p {
            font-size: 15px;
          }

          ul {
            text-align: left;
          }

          ul li {
            font-size: 14px;
          }
        }
      }
    }

    .cta {
      padding: 60px 20px;
      
      h2 {
        font-size: 28px;
      }

      .buttons {
        flex-direction: column;
        
        a {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;
